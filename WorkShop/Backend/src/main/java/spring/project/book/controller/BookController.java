package spring.project.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import spring.project.book.entity.Book;
import spring.project.book.service.BookService;


@RestController
@CrossOrigin
public class BookController {

	@Autowired
	 private BookService  bs;
	 
	 @PostMapping("/save")
	 public String savingBook(@RequestBody Book d) {
		  bs.savedata(d);
		  return "saved";
	 }
	 @GetMapping("/findall")
	 public List<Book> listing()
	  {
	 	 return bs.findall();
	  }
	 @PutMapping("/updatedata")
	 public String updateCompany(@RequestBody Book d) {
		  bs.updatedata(d);
		  return "updated";
	 }
	 @DeleteMapping("/delete{bookId}")
	 public String deleteCompany(@PathVariable("bookId")int bookId) {
		 bs.deletedata(bookId);
		 return "deleted";
	 }	
}