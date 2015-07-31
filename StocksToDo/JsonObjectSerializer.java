import com.google.gson.*;
import java.lang.reflect.Type;
public class JsonObjectSerializer implements JsonSerializer<JsonObject> {
		public JsonElement serialize(JsonObject obj, Type type, JsonSerializationContext context) {
			return obj;
		}
	}