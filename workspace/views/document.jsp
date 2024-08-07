<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:url var="resPath" value="/resources" />
<c:url var="context" value="/" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Work Space</title>
<style>
</style>
</head>
<body>
	<script>
		// 1. 문서가 결재완료 상태면 버튼 보이지 않음
		// 2. 문서가 반려 상태면 반려버튼 보이지 않음
		window.onload = function() {
			const status = "${document.status}";
			const empNo = "${document.empNo}";
			const loginEmpNo = "${sessionScope.empNo}";
			
			if (status === "complete" || status === "return" || empNo === loginEmpNo) {
				const buttons = document.querySelectorAll('.documentButton');
				buttons.forEach(function(button) {
					button.style.display = "none";
				});
				
				const commentButton = document.querySelector('.commentButton');
				button.style.display = "none";
			}
		};
		
		// '의견작성' 버튼 클릭하면 반려의견 작성 가능.
		const addComment = document.querySelector('.commentButton');
		const userInputZone = document.querySelector('.documentBody');
	
		addComment.addEventListener('click', function() {
			const description = document.createElement('span');
			description.textContent = '반려 의견 : ';
			
			const commentSection = document.createElement('textarea');
			commentSection.rows = 4;
			commentSection.maxLength = 150;
			commentSection.name = "returnComment";
			
			userInputZone.appendChild(description);
			userInputZone.appendChild(commentSection);
		});
		
		// 사용자가 작성한 반려의견이 있는 경우 문서 조회할 때 해당 반려의견이 보여지도록 엘리먼트 생성
		document.addEventListener('DOMContentLoaded', function() {
	        const returnComment = "${document.returnComment}";
	        
	        if(returnComment != null && returnComment.trim() !== '') {
	            const description = document.createElement('span');
	            description.textContent = '${personReturned}' + '님의 반려 의견 : ' + '${timeDocReturned}';
	            description.id = "description";
	            
	            const commentSection = document.createElement('span');
	            commentSection.textContent = returnComment;
	            commentSection.id = "writtenComment";
	            
	            userInputZone.appendChild(description);
	            userInputZone.appendChild(commentSection);
		    };
	    });
	</script>
</body>
</html>