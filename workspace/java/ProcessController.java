package himedia.project.workspace.controller;

@Slf4j
@Controller
public class ProcessController implements HandlerExceptionResolver {
	
	// 문서 조회
	@GetMapping("/process/documents/{docNo}")
	public String document(@PathVariable Long docNo, HttpSession session, Model model) {
		// TODO:: 231224 session 없는 경우 login 페이지로 이동 추가
		// session에 값이 있는지 체크하여 로그인 여부 확인
		if (session.getAttribute("userId") == null) {
			return "redirect:/";
		}

		// TODO:: 전달받은 docId로 상세 데이터 조회 후 model.addAttribute("document", result);
		Document result = service.getDocumentDetail(docNo);
		model.addAttribute("document", result);
		
		// 231231 session에서 받은 문서반려자 정보를 view로 전달
		String personReturned = (String)session.getAttribute("personReturned");
		model.addAttribute("personReturned", personReturned);
		
		// 231231 session에서 받은 반려된 시간 정보를 view로 전달
		String timeDocReturned = (String)session.getAttribute("timeDocReturned");
		model.addAttribute("timeDocReturned", timeDocReturned);
		return "process/document";
	}


	// 수정 페이지
	@GetMapping("/process/documents/{docNo}/edit")
	public String editForm(@PathVariable Long docNo, Model model) {
		List<Member> members = memberService.getMemberList();
		model.addAttribute("members", members);
		Document doc = service.getDocumentDetail(docNo);
		model.addAttribute("edit", "editingNow"); // 12.29 노윤건
		model.addAttribute("document", doc);
		return "process/editForm";
	}

	// 문서 수정 완료 버튼
	@PostMapping("/process/documents/{docNo}/edit")
	public String edit(@PathVariable Long docNo, Documents doc, @RequestParam("file") MultipartFile multipartFile)
			throws IllegalStateException, IOException {

		service.editForm(doc.getDocNo(), doc);
		return "redirect:/process/documents/{docNo}";
	}

	// 반려 버튼 클릭
	@PostMapping("/process/documents/{docNo}/return")
	public String returnDocument(@PathVariable Long docNo, HttpSession session, 
			@RequestParam String returnInfo, String returnComment, Model model) {
		
	    LocalDateTime currentTime = LocalDateTime.now();
	    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	    String formattedTime = currentTime.format(formatter);
	    session.setAttribute("timeDocReturned", formattedTime);
		
		String[] infoArray = returnInfo.split("-");
		String returnDoc = infoArray[0];
		String nameReturned = infoArray[1];
		String positionReturned = infoArray[2];
		session.setAttribute("personReturned", nameReturned + positionReturned);
		service.returnDocument(docNo, returnDoc, returnComment);
		return "redirect:/process/documents/return";
	}
}
