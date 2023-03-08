package spring.project.book.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.project.book.entity.Book;
import spring.project.book.repository.BookRepo;
import java.util.List;
@Service
public class BookService {

	@Autowired
	private BookRepo rep;
	public Book savedata(Book s) {
		return rep.save(s);
	}
	public List<Book> findall(){
		return rep.findAll();
	}
	public void deletedata(int bookId) {
		rep.deleteById(bookId);
	}
	public Book updatedata(Book s) {
		return rep.saveAndFlush(s);
	}
}