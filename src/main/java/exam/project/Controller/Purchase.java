package exam.project.Controller;

public class Purchase {

    public int sum = 0;


    public int internetConnection(boolean hasInternetConnection) {
        if (hasInternetConnection) {
            sum = sum + 200;
        }
        else {
            return sum;
        }
        return sum;
    }

    public int phoneLinesIncrement() {
        sum = sum + 150;
        return sum;
    }

    public int phoneLinesDecrement() {
        sum = sum - 150;
        return sum;
    }

    public int addPhone(String modelName) {
        System.out.println(modelName);
        switch(modelName) {
            case "Motorola G99":
                System.out.println("moto11");
                sum = sum + 800;
                break;
            case "iPhone 99":
                System.out.println("ihpone11");
                sum = sum + 6000;
                break;
            case "Samsung Galaxy 99":
                System.out.println("samsung11");
                sum = sum + 1000;
                break;
            case "Sony Xperia 99":
                System.out.println("sony11");
                sum = sum + 900;
                break;
            case "Huawei 99":
                System.out.println("huawei11");
                sum = sum + 900;
                break;
            default:
                System.out.println("default!");
        }
        return sum;
    }

    public int removePhone(String modelName) {
        System.out.println(modelName);
        switch(modelName) {
            case "Motorola G99":
                System.out.println("moto11");
                sum = sum - 800;
                break;
            case "iPhone 99":
                System.out.println("ihpone11");
                sum = sum - 6000;
                break;
            case "Samsung Galaxy 99":
                System.out.println("samsung11");
                sum = sum - 1000;
                break;
            case "Sony Xperia 99":
                System.out.println("sony11");
                sum = sum - 900;
                break;
            case "Huawei 99":
                System.out.println("huawei11");
                sum = sum - 900;
                break;
            default:
                System.out.println("default!");
        }
        return sum;
    }


}
