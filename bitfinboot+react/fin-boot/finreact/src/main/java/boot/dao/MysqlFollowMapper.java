package boot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import boot.dto.FollowDto;

@Mapper
public interface MysqlFollowMapper {
	
	public List<FollowDto> getFollowData(int mnum);
	public List<FollowDto> getFollowingData(int mnum);
}
