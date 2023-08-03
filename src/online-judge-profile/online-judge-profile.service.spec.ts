import { Test, TestingModule } from '@nestjs/testing';
import { OnlineJudgeProfileService } from './online-judge-profile.service';

describe('OnlineJudgeProfileService', () => {
  let service: OnlineJudgeProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineJudgeProfileService],
    }).compile();

    service = module.get<OnlineJudgeProfileService>(OnlineJudgeProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
