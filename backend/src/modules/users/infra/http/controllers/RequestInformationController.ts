import { Request, Response } from "express";
import { container } from "tsyringe";

import { RequestInformationsService } from "@modules/users/services/RequestInformationsService";

class RequestInformationController {
  public async index(request: Request, response: Response) {
    const { id } = request.user;

    const requestInfoService = container.resolve(RequestInformationsService);

    const user = await requestInfoService.execute({ id });

    return response.json({ user });
  }
}

export default RequestInformationController;
