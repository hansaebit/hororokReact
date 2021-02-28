package boot.controller;


import java.text.SimpleDateFormat;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import boot.dao.MysqlMypageMapper;
import boot.dto.MemberDto;
import boot.dto.MypageInfo;
import boot.dto.MypageList;
import boot.dto.ReviewDto;
import boot.dto.likebtnDto;


@RestController
@CrossOrigin
public class ReactMypageController {
	
	@Autowired
	MysqlMypageMapper mapper;
	
	//1. 닉네임으로 넘버 가져오기
	//2. 넘버로 member정보(닉네임) 가져오기 ... 사진은 도대체 어디에 있을까...
	//3. 넘버로 게시물 갯수 가져오기 (rmnum은 멤버번호)
	//4. 넘버로 팔로워(나를 팔로잉한 사람) 수 가져오기
	//5. 넘버로 팔로우(내가 팔로잉한 사람) 수 가져오기
	@GetMapping("/mypage/myInformation")
	public MypageInfo getMyInformation(@RequestParam String mnick, @RequestParam String mynum) {
		String mnum=mapper.getMyNumber(mnick);
		MemberDto ProfileDto=mapper.getMyMemberDto(mnum);
		MypageInfo dto = new MypageInfo();
		dto.setMnum(mnum);
		dto.setMnick(mnick);
		dto.setMintro(ProfileDto.getMintro());
		dto.setMpic(ProfileDto.getMpic());
		dto.setFollow(mapper.getFollow(mnum));
		
		dto.setListCount(mapper.getMyListCount(mnum));
		boolean following;
		if((mapper.getImYourFollwer(mynum, mnum)==0)) {
			following=false;
			dto.setFollower(mapper.getFollower(mnum));
		}else {
			following=true;
			dto.setFollower(mapper.getFollower(mnum)-1);
		}
		dto.setFollowing(following);
		return dto;
	}
	
	
	//6. 전체 리뷰 가져오기
	@GetMapping("/mypage/list")
	public List<ReviewDto> getMyAllList(@RequestParam String mnick) {
		return mapper.getMyAllList(mapper.getMyNumber(mnick));
	}
	//7. 한식 리뷰 가져오기
	@GetMapping("/mypage/list/kor")
	public List<ReviewDto> getMyKorList(@RequestParam String mnick) {
		return mapper.getMyKorList(mapper.getMyNumber(mnick));
	}
	//8. 중식 리뷰 가져오기
	@GetMapping("/mypage/list/cn")
	public List<ReviewDto> getMyCnList(@RequestParam String mnick) {
		return mapper.getMyCnList(mapper.getMyNumber(mnick));
	}
	//9. 일식 리뷰 가져오기
	@GetMapping("/mypage/list/jap")
	public List<ReviewDto> getMyJapList(@RequestParam String mnick) {
		return mapper.getMyJapList(mapper.getMyNumber(mnick));
	}
	
	//10. 양식 리뷰 가져오기
	@GetMapping("/mypage/list/wes")
	public List<ReviewDto> getMyWesList(@RequestParam String mnick) {
		return mapper.getMyWesList(mapper.getMyNumber(mnick));
	}
	//11. 기타 리뷰 가져오기
	@GetMapping("/mypage/list/etc")
	public List<ReviewDto> getMyEtcList(@RequestParam String mnick) {
		return mapper.getMyEtcList(mapper.getMyNumber(mnick));
	}
	
	//12. 리스트 각 요소에 들어갈 내용 가져오기.
	@GetMapping("/mypage/getMyListInformation")
	public MypageList getMyListInformation(@RequestParam String rnum) {
		ReviewDto review=mapper.getMyReviewData(rnum);
		MypageList myList = new MypageList();
		
		//멤버
		myList.setMnum(review.getMnum());
		myList.setMnick(review.getMnick());
		myList.setMpic(review.getMpic());
		//리뷰
		myList.setRnum(rnum);
		myList.setRcontent(review.getRcontent());
		myList.setRscore(review.getRscore());
		SimpleDateFormat format = new SimpleDateFormat("yyyy년 MM월 dd일");
		myList.setRwriteday(format.format(review.getRwriteday()));
		//사진 *한장만... 여러장 할 경우 변경
		myList.setPicname(mapper.getMyReviewPic(rnum));
		
		//레스토랑
		myList.setResaddr(review.getResaddr());
		myList.setResname(review.getResname());
		
		//해시테그
		myList.setHashtag(mapper.getMyHashtag(rnum));
		
		//좋아요 수
		myList.setLikes(mapper.getMyLikeCount(rnum));

		return myList;
	}
	
	
	//13. 팔로워 하기
	@GetMapping("/mypage/addFollower")
	public void addFollower(@RequestParam String mnick, @RequestParam String mynum) {
		String yournum=mapper.getMyNumber(mnick);
		mapper.addFollower(yournum, mynum);
	}
	
	//14. 팔로워 취소하기
	@GetMapping("/mypage/delFollwer")
	public void delFollwer(@RequestParam String mnick, @RequestParam String mynum) {
		String yournum=mapper.getMyNumber(mnick);
		mapper.delFollwer(yournum, mynum);
	}
	
	//15. 좋아요 버튼 만들기
	//15-1 좋아요 갯수와 내가 좋아요 했는지 여부 확인하기
	@GetMapping("mypage/selectLikere")
	public likebtnDto selectLikere(@RequestParam String rnum, @RequestParam String mnum) {
		likebtnDto dto=new likebtnDto();
		//좋아요 수
		
		
		boolean likeme;
		if((mapper.getMyLikeOk(rnum, mnum)==0)) {
			likeme=false;
			dto.setLikeCount(mapper.getMyLikeCount(rnum));
		}else {
			likeme=true;
			dto.setLikeCount(mapper.getMyLikeCount(rnum)-1);
		}
		//트루펄스
		dto.setLikeme(likeme);
		
		return dto;
	}
	
	//15-2 좋아요 하기
	@GetMapping("/mypage/addLike")
	public void addLiker(@RequestParam String rnum, @RequestParam String mnum) {
		mapper.addLike(rnum, mnum);
	}
	//15-3 좋아요 취소
	@GetMapping("/mypage/delLike")
	public void delLiker(@RequestParam String rnum, @RequestParam String mnum) {
		mapper.delLike(rnum, mnum);
	}
	
	
}
