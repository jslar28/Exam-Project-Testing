package exam.project.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LolController {
    @RequestMapping(value = {"/testlol"}, method = RequestMethod.GET)
    public String index() {
        System.out.println("lollern");
        return "index.html";
    }
}
