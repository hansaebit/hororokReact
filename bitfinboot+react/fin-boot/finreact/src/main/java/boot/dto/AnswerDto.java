package boot.dto;

import java.sql.Timestamp;
import java.util.List;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Alias("answer")
public class AnswerDto {
	//answer
	private int anum;
	private int arnum;
	private String amnick;
	private String acontent;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Timestamp awriteday;
	

}