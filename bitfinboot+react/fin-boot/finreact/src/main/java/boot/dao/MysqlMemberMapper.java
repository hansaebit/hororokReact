package boot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import boot.dto.MemberDto;

@Mapper
public interface MysqlMemberMapper {
	
	public List<MemberDto> getData(String mnum);
	public List<MemberDto> getFollowing(String mnum);
	public void insertMem(MemberDto mdto);
	public int checkEmail(String memailid);
	public int checkNick(String mnick);
	public MemberDto LoginCheck(MemberDto mdto);

	public void UpdatePsw(MemberDto mdto);
	public void UpdateProfile(MemberDto mdto);
	public void UpdateMintro(MemberDto mdto);

}
