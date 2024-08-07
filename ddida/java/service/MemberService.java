package com.runner.ddida.service;

@Service
@RequiredArgsConstructor
public class MemberService {

	private final MemberRepository memberRepository;
	private final ReserveRepository reserveRepository;
	
	public Map<String, Object> searchUsers(String searchKeyword, String searchType, Pageable pageable) {
		Map<String, Object> result = new HashMap<>();
		List<Long> userNoList = memberRepository.getUserNoList();
		List<Long[]> userStatistics = reserveRepository.getUserStatistics(userNoList);
		result.put("userStats", userStatistics);
		
		if (searchKeyword == null || searchType == null) {
			result.put("result", memberRepository.findAll(pageable));
		} else {
			switch(searchType) {
			case "username":
				result.put("result", memberRepository.findByUsernameContaining(searchKeyword, pageable));
				break;
			case "name":
				result.put("result", memberRepository.findByNameContaining(searchKeyword, pageable));
				break;
			case "role":
				result.put("result", memberRepository.findByRoleContaining(searchKeyword, pageable));
				break;
			case "signDate":
				result.put("result", memberRepository.findBySignDateContaining(searchKeyword, pageable));
				break;
			default:
				result.put("result", memberRepository.findAll(pageable));
			}
		}
		return result;
	}
}
