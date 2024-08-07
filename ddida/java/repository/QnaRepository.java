package com.runner.ddida.repository;

public interface QnaRepository extends JpaRepository<Qna, Long> {
	
	// [관리자] 회원 상세페이지 오른쪽 표에 정보 표시
	@Query(value = "SELECT qna.* " +
            "FROM qna " +
            "WHERE qna.username IN (SELECT member.username FROM member WHERE member.user_no = :userNo);",
    nativeQuery = true)
	List<Qna> findByUserNo(@Param("userNo") Long userNo);
	
	/* [관리자] 문의 상세(이름까지 같이 표시) 24.02.04 노윤건 */
    @Query(value = "SELECT q, m.name AS user_name "
    		+ "FROM Qna q JOIN Member m ON q.username = m.username "
    		+ "WHERE q.qnaNo = :qnaNo", nativeQuery = true)
    Optional<Object[]> findQnaAndUsernameByQnaNo(@Param("qnaNo") Long qnaNo);

    // [관리자] 답변내용 qna테이블로 저장 24.02.04 노윤건
    // 코드 추가 - 답변한 시각 저장 24.02.14
    @Transactional
    @Modifying
    @Query(value = "update qna q set q.answer = :answer, q.answer_time = :answerTime "
    		+ "where q.qna_no = :qnaNo", nativeQuery = true)
    void saveAnswer(@Param("qnaNo") Long qnaNo, @Param("answer") 
    String answer, @Param("answerTime") String answerTime);
    
	// [관리자] 아이디로 검색된 문의 목록 - 노윤건 24.02.04
	Page<Qna> findByUsernameContaining(String searchKeyword, Pageable pageable);
	
	// [관리자] 작성일자로 검색된 문의 목록 - 노윤건 24.02.04
	Page<Qna> findByQnaDateContaining(String searchKeyword, Pageable pageable);
}