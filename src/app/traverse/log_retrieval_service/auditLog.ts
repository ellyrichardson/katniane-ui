export interface AuditLog {
    title: string;
    content: string;
    timestamp: string;
    reporter: string;
}

export interface RetrievedLogDetails {
    filename: string;
    date: string;
    contents: AuditLog[];
}


