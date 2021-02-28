package boot.dto;

import java.sql.Timestamp;

public class MypageList {
	
	//멤버
	private int mnum;
	private String mnick;
	private String mpic;
	
	//리뷰
	private String rnum;
	private String rcontent;
	private int rscore;
	private String rwriteday;
	
	//사진
	private String picname;
	
	//레스토랑
	private String resname;
	private String resaddr;
	
	//해시테그
	private String hashtag;
	
	//좋아요 수
	private int likes;

	public int getMnum() {
		return mnum;
	}

	public void setMnum(int mnum) {
		this.mnum = mnum;
	}

	public String getMnick() {
		return mnick;
	}

	public void setMnick(String mnick) {
		this.mnick = mnick;
	}

	public String getMpic() {
		return mpic;
	}

	public void setMpic(String mpic) {
		this.mpic = mpic;
	}

	public String getRnum() {
		return rnum;
	}

	public void setRnum(String rnum) {
		this.rnum = rnum;
	}

	public String getRcontent() {
		return rcontent;
	}

	public void setRcontent(String rcontent) {
		this.rcontent = rcontent;
	}

	public int getRscore() {
		return rscore;
	}

	public void setRscore(int rscore) {
		this.rscore = rscore;
	}

	public String getRwriteday() {
		return rwriteday;
	}

	public void setRwriteday(String rwriteday) {
		this.rwriteday = rwriteday;
	}

	public String getPicname() {
		return picname;
	}

	public void setPicname(String picname) {
		this.picname = picname;
	}

	public String getResname() {
		return resname;
	}

	public void setResname(String resname) {
		this.resname = resname;
	}

	public String getResaddr() {
		return resaddr;
	}

	public void setResaddr(String resaddr) {
		this.resaddr = resaddr;
	}

	public String getHashtag() {
		return hashtag;
	}

	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	
	
	
	
	
	
	
}
