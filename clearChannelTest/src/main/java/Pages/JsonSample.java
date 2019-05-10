package Pages;

import org.json.simple.JSONObject;

public class JsonSample {

    public static void main(String[] args) {
        JSONObject obj = new JSONObject();

        obj.put("name", "BMW M235i");
        obj.put("reg", "LC19 AAA");
        obj.put("engine", "N54");
        obj.put("color", "Blue");
        obj.put("seats", 4);
        obj.put("is_damaged", new Boolean(false));

        System.out.print(obj);
    }
}
