import { Test, TestingModule } from '@nestjs/testing';
import { OnlineJudgeProfileController } from './online-judge-profile.controller';
import { OnlineJudgeProfileService } from './online-judge-profile.service';

describe('OnlineJudgeProfileController', () => {
  let controller: OnlineJudgeProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineJudgeProfileController],
      providers: [OnlineJudgeProfileService],
    }).compile();

    controller = module.get<OnlineJudgeProfileController>(OnlineJudgeProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
