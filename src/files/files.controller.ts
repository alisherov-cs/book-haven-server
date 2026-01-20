import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './files.service';
import { getRequestOrigin } from 'src/helpers/getRequestOrigin';
import type { Request } from 'express';

@Controller('files')
export class FilesController {
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @Post('upload')
  uploadFile(@Req() req: Request, @UploadedFile() file: Express.Multer.File) {
    return {
      url: `${getRequestOrigin(req)}/${file.path}`,
      filename: file.filename,
    };
  }
}
