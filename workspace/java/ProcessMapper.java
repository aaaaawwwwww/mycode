package himedia.project.workspace.mapper;

public interface ProcessMapper {

	// 반려버튼 클릭
	@Update("update documents set status=#{status}, returnComment=#{returnComment} where docNo = #{docNo}")
	int returnDocument(@Param("docNo") Long docNo, @Param("status") String status, @Param("returnComment") String returnComment);
}
