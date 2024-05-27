import { Component, OnInit } from '@angular/core';
import { TimelogsService } from 'src/app/services/timelogs.service';
import { SessionService } from 'src/app/services/session.service';
import { Timelogs } from 'src/app/models/timelogs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-timelogs',
  templateUrl: './timelogs.component.html',
  styleUrls: ['./timelogs.component.css']
})
export class TimelogsComponent implements OnInit {
  timeLogsList = new BehaviorSubject<Timelogs[]>([])
  fullName: string = '';

  constructor(
    private timelogsService: TimelogsService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.fullName = this.sessionService.getFullName();
    const userId = this.sessionService.getUserId();
    this.getTimelogs(userId);
  }

  getTimelogs(userId: number): void { 
    this.timelogsService.getTimeLogs(userId).subscribe(
      (timeLogs: Timelogs[]) => {
        this.timeLogsList.next(timeLogs);
      },
      (error) => {
        console.error('Error fetching time logs:', error);
      }
    );
  }
}
