package boot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import boot.dto.MemberDto;
import boot.dto.ReviewDto;


@Mapper
public interface MysqlMypageMapper {
	
	//1. 닉네임으로 넘버 가져오기
	public String getMyNumber(String mnick);
	
	//2. 넘버로 member정보(닉네임) 가져오기 ... 사진은 도대체 어디에 있을까...
	public MemberDto getMyMemberDto(String mnum);
	
	//3. 넘버로 게시물 갯수 가져오기 (rmnum은 멤버번호)
	public int getMyListCount(String mnum);
	
	//4. 넘버로 팔로워(나를 팔로잉한 사람) 수 가져오기
	public int getFollower(String mnum);
	
	//5. 넘버로 팔로우(내가 팔로잉한 사람) 수 가져오기
	public int getFollow(String mnum);
	
	//5. 추가
	public int getImYourFollwer(String mynum, String yournum);
	
	
	
	//6. 전체 리뷰 가져오기
	public List<ReviewDto> getMyAllList(String mnum);
	
	//7. 한식 리뷰 가져오기
	public List<ReviewDto> getMyKorList(String mnum);
	
	//8. 중식 리뷰 가져오기 
	public List<ReviewDto> getMyCnList(String mnum);
	
	//9. 일식 리뷰 가져오기
	public List<ReviewDto> getMyJapList(String mnum);
	
	//10. 양식 리뷰 가져오기
	public List<ReviewDto> getMyWesList(String mnum);
	
	//11. 기타 리뷰 가져오기
	public List<ReviewDto> getMyEtcList(String mnum);
	
	
	//12 1.  rnum으로 멤버번호,닉네임,사진,내용,쓴날짜,가게이름,가게주소,해시테그 가져오기.
	public ReviewDto getMyReviewData(String rnum);
	
	public String getMyHashtag(String rnum);
	//12-2. rnum으로 사진들 가져오기.
	public String getMyReviewPic(String rnum);
	//12-3. rnum을 좋아하는 수 가져오기.
	public int getMyLikeCount(String rnum);
	
	//13. 팔로워 추가
	public void addFollower(String yournum, String mynum);	
	//14. 팔로워 삭제
	public void delFollwer(String yournum, String mynum);
	
	
	//15-1 좋아요 여부 확인
	public int  getMyLikeOk(String rnum, String mnum);
	//15-2 좋아요
	public void addLike(String rnum, String mnum);
	//15-3 좋아요 취소	
	public void delLike(String rnum, String mnum);
	
	
	
	
	
	
	
}
