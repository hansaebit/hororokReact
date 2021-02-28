package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages ={"boot.dao","boot.react","boot.controller","boot.dto","com.example.demo"})
@MapperScan({"boot.dao","boot.react","boot.controller","boot.dto","com.example.demo"})
public class FinreactApplication {

   public static void main(String[] args) {
      SpringApplication.run(FinreactApplication.class, args);
   }

}