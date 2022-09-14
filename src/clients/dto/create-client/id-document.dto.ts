import { Attachment } from '.';
export class IDDocument {
    attachments?: Attachment[];
    clientKey?: string;
    documentId?: string;
    documentType?: string;
    encodedKey?: string;
    identificationDocumentTemplateKey?: string;
    indexInList?: number;
    issuingAuthority?: string;
    validUntil?: string;
  }