package boot.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import boot.dto.AnswerDto;

@Mapper
public interface MysqlAnswerMapper {
	public void insertAnswer(AnswerDto dto);
	public List<AnswerDto> selectAllOfAnswer(String arnum);
	public void deleteAnswer(int anum);
	public void updateAnswer(AnswerDto dto);
	public AnswerDto getCommentData(int anum);
}
