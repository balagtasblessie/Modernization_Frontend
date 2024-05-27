import { Component, OnInit } from '@angular/core';
import { Timelogs } from 'src/app/models/timelogs';
import { TimelogsService } from 'src/app/services/timelogs.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  timeLogsList: Timelogs[] = [];
  fullName: string = '';
  userId: number = 0;
  buttonText: string = 'Clock In';

  isClockedIn: boolean = false;

  constructor(
    private timeLogsService: TimelogsService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.fullName = this.sessionService.getFullName();
    this.userId = this.sessionService.getUserId();
    this.loadTimeLogs();
  }

  loadTimeLogs() {
    this.timeLogsService.getDailyTimeLogs(this.userId).subscribe(
      logs => {
        this.timeLogsList = logs;
        console.log('Time logs loaded:', this.timeLogsList);
      },
      error => console.error('Error loading time logs:', error)
    );
  }

  onClickClockIn() {
    const currentTime = new Date();
    const newLog: Timelogs = {
      userid: this.userId,
      clockIn: currentTime,
      clockOut: null
    };
  
   
    this.timeLogsList.push(newLog);
  
    this.isClockedIn = true;
    this.buttonText = 'Clock Out';
  
    this.postTimeLog(newLog, true);
  }
  
  onClickClockOut() {
    const currentTime = new Date();
    const lastLogIndex = this.timeLogsList.length - 1;
  
    if (lastLogIndex < 0 || this.timeLogsList[lastLogIndex].clockOut) {
      console.error('No corresponding clock-in found. Cannot perform clock-out.');
      return;
    }
  
    const lastLog = this.timeLogsList[lastLogIndex];
    lastLog.clockOut = currentTime; 
  
    
    this.isClockedIn = false;
    this.buttonText = 'Clock In';
  
    
    this.postTimeLog(lastLog, false);
  }
  
  postTimeLog(timeLog: Timelogs, isClockedIn: boolean) {
    this.timeLogsService.postTimeLog(timeLog, isClockedIn).subscribe(
      response => {
        console.log('Time log posted successfully', response);
        
        this.loadTimeLogs();
      },
      error => console.error('Error posting time log:', error)
    );
  }
}  

