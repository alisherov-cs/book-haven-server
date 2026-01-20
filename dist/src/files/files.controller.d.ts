import type { Request } from 'express';
export declare class FilesController {
    uploadFile(req: Request, file: Express.Multer.File): {
        url: string;
        filename: string;
    };
}
