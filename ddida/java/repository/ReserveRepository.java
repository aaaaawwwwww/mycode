package com.runner.ddida.repository;

public interface ReserveRepository extends JpaRepository<Reserve, Long> {
	
	// 이용후기 수, 이용 횟수 조회 24.02.05 노윤건
    @Query(value = "select m.user_no, " +
            "(select count(reserve_id) from reserve r where r.user_no = m.user_no and r.checkout = 1) "
            + "as reserve_count, " +
            "(select count(reserve_id) from reserve r where r.user_no = m.user_no and r.review is not null) "
            + "as review_count " +
            "from member m where m.user_no IN :userNoList", nativeQuery = true)
    List<Long[]> getUserStatistics(@Param("userNoList") List<Long> userNoList);
}