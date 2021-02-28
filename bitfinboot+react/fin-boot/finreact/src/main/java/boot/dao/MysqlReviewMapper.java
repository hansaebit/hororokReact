package boot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import boot.dto.AnswerDto;
import boot.dto.ReviewDto;


@Mapper
public interface MysqlReviewMapper {
	
	
	public int getTotalCount();
	public List<ReviewDto> getAllDatas();
	public ReviewDto getData(String rnum);
	public List<ReviewDto> getPostDatas(String mnum);
	public ReviewDto selectNumOfReview(int rnum);
	public ReviewDto getPicOfReview(String rnum); 
	public ReviewDto getResInfoOfReview(String rnum); 
	public ReviewDto getHashtagOfReview(String rnum);
	public AnswerDto getAnswerOfReview(String rnum); 
	public ReviewDto getFollpostData(String rnum); 
	public int getLikesOfReview(String rnum);
	public List<ReviewDto> searchAddrOfReview(String keyword); 

	

//	public int getTotalCount();
//	//public List<ReviewDto> getAllDatas(int mnum);
	
	//public List<ReviewDto> getAllDatas(String rmnum);
	
	public void insertReview (ReviewDto dto);
	public void insertRestaurant (ReviewDto dto);
	public void insertRepic (ReviewDto dto);
	public void insertHashtag (ReviewDto dto);
	
	public int getRnumber(String rmnum);
	
	public ReviewDto getContent(int rnum);
	
	
	public void deleteReview(String rnum);
	public void deleteRestaurant(String revnum);
	public ReviewDto getPhotoname(String pirnum);
	
	

}
