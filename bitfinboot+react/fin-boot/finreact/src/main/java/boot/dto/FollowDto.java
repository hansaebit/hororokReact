package boot.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Alias("follow")
public class FollowDto {
	private int fmnum;
	private int follower;
	private int mnum;
	private String memailid;
	private String mnick;
	private String mpic;
}
