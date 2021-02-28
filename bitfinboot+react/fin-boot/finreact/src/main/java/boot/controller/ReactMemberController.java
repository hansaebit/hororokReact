package boot.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import boot.dao.MysqlMemberMapper;
import boot.dto.MemberDto;


@RestController
@CrossOrigin
public class ReactMemberController {
	
	@Autowired
	MysqlMemberMapper mapper;
	
	MultipartFile upload;
	String photoname;
	String uploadPath;
	
	
	@PostMapping("/member/add")
	public void dataAdd(@RequestBody MemberDto mdto)
	{
		//System.out.println("react 출력 시작");
		//System.out.println("memailid="+mdto.getMemailid());
		//System.out.println("menick="+mdto.getMnick());//toString 자동호출
		//System.out.println("mema="+mdto.getMpw());
		//memberdto 에 추가
		mapper.insertMem(mdto);
		
	}
	
	@PostMapping("/member/pswupdate")
	public void pswupdatte(@RequestBody MemberDto mdto )
	{
		
		mapper.UpdatePsw(mdto);	
	}
	
	

	@PostMapping("/member/checkEmail")
	public int checkEmail(@RequestBody MemberDto mdto) {
		String memailid = mdto.getMemailid();
		int ce = mapper.checkEmail(memailid);
		System.out.println("memeilid : "+memailid + "   ce : "+ ce);
	
		return ce;
	}
	
	@PostMapping("/member/checkNick")
	public int checkNick(@RequestBody MemberDto mdto) {
		String mnick = mdto.getMnick();
		int ce = mapper.checkNick(mnick);
		System.out.println("meNICK : "+ mnick + "   ce : "+ ce);
	
		return ce;
	}
	
	@PostMapping("/member/memCheck")
	public MemberDto memberCheck(@RequestBody MemberDto mdto){
		
		System.out.println(mdto.getMemailid()+" "+mdto.getMpw());
		MemberDto mlist = mapper.LoginCheck(mdto);
		System.out.println(mlist);
		return mlist;
	}
	
	@PostMapping("/member/phoupdate")
	public void memberupup(@RequestBody MemberDto mdto){
		
		System.out.println(mdto.getMpic()+" "+mdto.getMnum());
		
		mapper.UpdateProfile(mdto);
	
	}
	
	@PostMapping("/member/memupdate")
	public void memberudd(@RequestBody MemberDto mdto){
		
		System.out.println(mdto.getMintro()+" "+mdto.getMnum());
		
		mapper.UpdateMintro(mdto);
	
	}
	
	
	
	
	@PostMapping(value = "/member/upload", consumes = {"multipart/form-data"})
	public Map<String, String> fileUpload(@RequestParam MultipartFile uploadFile
			, HttpServletRequest request)
	{
		
		
		uploadPath = request.getSession().getServletContext().getRealPath("/profilesave");
		System.out.println(uploadPath);
		
		// 이미지의 확장자 가져오기
		int pos = uploadFile.getOriginalFilename().lastIndexOf("."); // 마지막 도트의 위치
		String ext = uploadFile.getOriginalFilename().substring(pos);
		
		// 저장할 이미지명 변경하기
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
		photoname = "profile" + sdf.format(date) + ext;
		
		upload = uploadFile;
		
		try {
			uploadFile.transferTo(new File(uploadPath+"\\"+photoname));
		} catch (IllegalStateException | IOException e) {
			// TODO Auto-generated catch block
			System.out.println("파일저장오류:"+e.getMessage());
		}
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("photoname", photoname);
		System.out.println("photoname:"+photoname);
		return map;
	}
	
	
	
	
	
	
	

}
