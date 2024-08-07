package com.runner.ddida.repository;

public interface MemberRepository extends JpaRepository<Member, Long> {
	// [관리자] find userNo
	@Query(value = "select user_no from member", nativeQuery = true)
	List<Long> getUserNoList();
} 