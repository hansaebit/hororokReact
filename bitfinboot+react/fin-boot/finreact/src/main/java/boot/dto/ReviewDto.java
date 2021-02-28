package boot.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("review")
public class ReviewDto {
	
	//review
	private int rnum;
	private int rmnum;
	private String rcontent;
	private int rscore;
	@JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Seoul")
	private Timestamp rwriteday;
	private String rcategory;
	
    //member
    private int mnum;
    private String memailid;
    private String mnick;
    private String mpw;
    private String mpic;
	
	//restaurant;
	private int resnum;
	private int revnum;
	private String resname;
	private String resaddr;
	
	//hashtag
	private int crnum;
	private String hashtag;
	
	//repic
	private int pirnum;
	private String picname;
	
	//likere
	private int lmnum;
	private int lrnum;
	public int getRnum() {
		return rnum;
	}
	public void setRnum(int rnum) {
		this.rnum = rnum;
	}
	public int getRmnum() {
		return rmnum;
	}
	public void setRmnum(int rmnum) {
		this.rmnum = rmnum;
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
	public Timestamp getRwriteday() {
		return rwriteday;
	}
	public void setRwriteday(Timestamp rwriteday) {
		this.rwriteday = rwriteday;
	}
	public int getMnum() {
		return mnum;
	}
	public void setMnum(int mnum) {
		this.mnum = mnum;
	}
	public String getMemailid() {
		return memailid;
	}
	public void setMemailid(String memailid) {
		this.memailid = memailid;
	}
	public String getMnick() {
		return mnick;
	}
	public void setMnick(String mnick) {
		this.mnick = mnick;
	}
	public String getMpw() {
		return mpw;
	}
	public void setMpw(String mpw) {
		this.mpw = mpw;
	}
	public String getMpic() {
		return mpic;
	}
	public void setMpic(String mpic) {
		this.mpic = mpic;
	}
	public int getResnum() {
		return resnum;
	}
	public void setResnum(int resnum) {
		this.resnum = resnum;
	}
	public int getRevnum() {
		return revnum;
	}
	public void setRevnum(int revnum) {
		this.revnum = revnum;
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
	public int getCrnum() {
		return crnum;
	}
	public void setCrnum(int crnum) {
		this.crnum = crnum;
	}
	public String getHashtag() {
		return hashtag;
	}
	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
	}
	public int getPirnum() {
		return pirnum;
	}
	public void setPirnum(int pirnum) {
		this.pirnum = pirnum;
	}
	public String getPicname() {
		return picname;
	}
	public void setPicname(String picname) {
		this.picname = picname;
	}
	public int getLmnum() {
		return lmnum;
	}
	public void setLmnum(int lmnum) {
		this.lmnum = lmnum;
	}
	public int getLrnum() {
		return lrnum;
	}
	public void setLrnum(int lrnum) {
		this.lrnum = lrnum;
	}
	public String getRcategory() {
		return rcategory;
	}
	public void setRcategory(String rcategory) {
		this.rcategory = rcategory;
	}

		
	
	
	

}
