export default function Entry(props) {
  const { properties } = props;

  function getPropertyValue(obj) {
    console.log(obj);
    switch (obj.type) {
      case "select":
        // {id, color, name}
        return obj.select.name;
      case "date":
        // {start, end, timezone}
        return obj.date.start;
      case "url":
        return obj.url;
      case "title":
        // [{annotations, href, plain_text, text: {content, link}}]
        return obj.title[0].plain_text;
      default:
        return "Unknown";
    }
  }

  return (
    <div className="border-b">
      {Object.entries(properties).map(([key, val]) => (
        <p key={key}>
          {key} : {getPropertyValue(val)}
        </p>
      ))}
    </div>
  );
}
