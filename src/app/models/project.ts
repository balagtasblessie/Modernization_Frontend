import { User } from "./user";

export class Project {
    constructor(
        public projectId ?: Int16Array,
        public mc ?: string,
        public projectName ?: string,
        public user ?: User
    ) {

    }
}
