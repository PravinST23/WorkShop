package spring.project.book.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import spring.project.book.entity.Book;
public interface BookRepo extends JpaRepository<Book, Integer> {
}