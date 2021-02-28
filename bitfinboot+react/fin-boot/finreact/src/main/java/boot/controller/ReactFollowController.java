package boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import boot.dao.MysqlFollowMapper;
import boot.dto.FollowDto;

@CrossOrigin
@RestController
public class ReactFollowController {
	
	@Autowired
	MysqlFollowMapper mapper;
	
	@GetMapping("/follow/list")
	public List<FollowDto> getFollowList(@RequestParam int mnum)
	{	
		
		return mapper.getFollowData(mnum);
	}
	@GetMapping("/following/list")
	public List<FollowDto> getFollowingListData(@RequestParam int mnum)
	{
		return mapper.getFollowingData(mnum);
	}
}
