package boot.react;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//이번 예제는 DB 는 사용안하고 리액트하고의 통신 테스트만 합니다.

@RestController
@CrossOrigin  /*다른 도메인과의 통신을 위해서 추가:스프링버전5부터 가능*/
public class ReactDeptController {
	List<Dept> list=new ArrayList<Dept>();
	
	//데이타 추가
	//@RequestBody : json 데이타로 받을경우 자동으로 dto로 변환해서 받는다
	@PostMapping("/react/add")
	public void dataAdd(@RequestBody Dept dept)
	{
		System.out.println("react add success");
		System.out.println(dept);//toString 자동호출
		//list 에 추가
		list.add(dept);		
	}	
}
