import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "sdfh",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "oskfh",
      label: "Can I use Javasctipt on a project",
      content:
        "You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.",
    },
    {
      id: "pzkdy",
      label: "Can I use CSS on a project",
      content:
        "You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
