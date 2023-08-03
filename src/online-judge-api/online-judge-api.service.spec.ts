import { Test, TestingModule } from '@nestjs/testing';
import { OnlineJudgeApiService } from './online-judge-api.service';

describe('OnlineJudgeApiService', () => {
  let service: OnlineJudgeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineJudgeApiService],
    }).compile();

    service = module.get<OnlineJudgeApiService>(OnlineJudgeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
