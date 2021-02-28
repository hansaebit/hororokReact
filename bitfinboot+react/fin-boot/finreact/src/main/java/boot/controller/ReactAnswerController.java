package boot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import boot.dao.MysqlAnswerMapper;
import boot.dto.AnswerDto;

@CrossOrigin
@RestController
public class ReactAnswerController {

	@Autowired
	MysqlAnswerMapper mapper;

	@PostMapping("/answer/insert")
	public Map<String, String> insert(
			@RequestBody AnswerDto dto) {
	
		//db에 인서트
		mapper.insertAnswer(dto);
		
		//리턴 할 메세지
		Map<String, String> map=new HashMap<String, String>();
		map.put("mes","Insert Success");
		return map;
	}
	
	@GetMapping("/answer/answerlist")
	public List<AnswerDto> answerList(@RequestParam String arnum) {
		return mapper.selectAllOfAnswer(arnum);
	}
	
	@DeleteMapping("/answer/delete")
	public void delete(@RequestParam int anum) {
		mapper.deleteAnswer(anum);
	}
	
	@PostMapping("/answer/update")
	public void update(@RequestBody AnswerDto dto) {
		mapper.updateAnswer(dto);
	}
	@GetMapping("/answer/answerdata")
	public AnswerDto getData(@RequestParam int anum) {
		return mapper.getCommentData(anum);
	}
}
