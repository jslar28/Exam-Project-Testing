package exam.project.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    Purchase purchase = new Purchase();

    @RequestMapping(value = {"", "/", "/index"}, method = RequestMethod.GET)
    public String index() {
        return "index.html";
    }

    @RequestMapping(value = "/internet", method = RequestMethod.GET)
    @ResponseBody
    public int internetConnection(boolean hasInternetConnection) {
        return purchase.internetConnection(hasInternetConnection);
    }

    @RequestMapping(value = "/phone-line-increment", method = RequestMethod.GET)
    @ResponseBody
    public int phoneLinesIncrement() {
        return purchase.phoneLinesIncrement();
    }

    @RequestMapping(value = "/phone-line-decrement", method = RequestMethod.GET)
    @ResponseBody
    public int phoneLinesDecrement() {
        return purchase.phoneLinesDecrement();
    }

    @RequestMapping(value = "/add-phone", method = RequestMethod.GET)
    @ResponseBody
    public int addPhone(String modelName) {
        return purchase.addPhone(modelName);
    }

    @RequestMapping(value = "/remove-phone", method = RequestMethod.GET)
    @ResponseBody
    public int removePhone(String modelName) {
        return purchase.removePhone(modelName);
    }


}
