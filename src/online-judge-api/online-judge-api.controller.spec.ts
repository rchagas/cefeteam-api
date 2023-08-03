import { Test, TestingModule } from '@nestjs/testing';
import { OnlineJudgeApiController } from './online-judge-api.controller';
import { OnlineJudgeApiService } from './online-judge-api.service';

describe('OnlineJudgeApiController', () => {
  let controller: OnlineJudgeApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineJudgeApiController],
      providers: [OnlineJudgeApiService],
    }).compile();

    controller = module.get<OnlineJudgeApiController>(OnlineJudgeApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
