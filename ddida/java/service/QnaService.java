package com.runner.ddida.service;

@Service
@RequiredArgsConstructor
public class QnaService {
   private final QnaRepository qnaRepository;

   // [관리자] 문의글번호로 검색된 문의 목록 - 노윤건 24.02.04
   public Page<Qna> findByQnaNoContaining(String searchKeyword, Pageable pageable) {
      return qnaRepository.findByDescriptionContaining(searchKeyword, pageable);
   }

   // [관리자] 검색 페이징
   public Page<Qna> searchQna(String searchKeyword, String searchType, Pageable pageable) {
      if (searchKeyword == null || searchType == null) {
         return qnaRepository.findAll(pageable);
      } else {

         switch (searchType) {
         case "title":
            return qnaRepository.findByTitleContaining(searchKeyword, pageable);
         case "username":
            return qnaRepository.findByUsernameContaining(searchKeyword, pageable);
         case "qnaDate":
            return qnaRepository.findByQnaDateContaining(searchKeyword, pageable);
         default:
            return qnaRepository.findAll(pageable);
         }
      }
   }

   // [관리자] 회원 상세페이지 오른쪽 표에 정보 표시
   public List<Qna> findByUserNo(Long userNo) {
      return qnaRepository.findByUserNo(userNo);
   }

   // [관리자] 답변내용 qna테이블로 저장 24.02.04 노윤건
   public void saveAnswer(Long qnaNo, String answer) {
      LocalDateTime currentDateTime = LocalDateTime.now();
      DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
      String formattedDateTime = currentDateTime.format(formatter);
      qnaRepository.saveAnswer(qnaNo, answer, formattedDateTime);
   }
}