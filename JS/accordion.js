var options = {
  container: "my-accordion",
  mainTitle: "Main accordion title",
  panels: [
    {
      title: "My profile",
      description:
        "Tempor exercitation do dolor elit. Cillum excepteur duis aliqua fugiat veniam exercitation elit aliqua ipsum tempor cupidatat. Nisi nulla dolore sunt enim pariatur do tempor elit aliquip aute proident laborum.",
      content:
        "<p>Dolor enim deserunt anim proident sint ex aliqua qui. Do nostrud officia ipsum deserunt cillum. Veniam deserunt adipisicing consequat commodo consequat commodo magna. Non cillum enim elit occaecat velit incididunt duis eiusmod sint aliqua sunt ullamco proident occaecat. Esse officia pariatur Lorem non quis amet do exercitation cupidatat adipisicing et eu ipsum.</p>"
    },
    {
      title: "Change password",
      description:
        "Deserunt qui do ipsum id deserunt deserunt consectetur incididunt. Enim cillum do culpa sunt dolore mollit ex aute quis duis enim Lorem. Officia do anim et Lorem eiusmod ut in ut reprehenderit Lorem aliquip laborum nulla ullamco. Sunt pariatur quis adipisicing non consequat eiusmod ut officia exercitation ea dolore irure fugiat reprehenderit. Occaecat irure qui dolor velit.",
      content:
        "<p>Lorem Lorem dolore magna id irure aliquip tempor deserunt sunt fugiat non. Velit nostrud nostrud exercitation magna Lorem tempor eiusmod enim nulla. Reprehenderit laborum qui occaecat quis sint dolor proident quis ea ad. Sunt ullamco proident tempor mollit fugiat ex culpa excepteur cillum officia do consequat voluptate id. Deserunt id nostrud occaecat exercitation tempor quis commodo aliquip voluptate consequat ex proident ad aliquip. Sit et anim ullamco dolor pariatur nostrud ex labore est aliquip officia cillum.</p>"
    },
    {
      title: "Change password",
      description: "Change your login password",
      content:
        "<p>Cupidatat eu reprehenderit consequat non proident nostrud id voluptate veniam eiusmod cupidatat. Minim irure dolore cupidatat ullamco. Dolore do elit duis et quis tempor laborum occaecat laborum ea mollit. Pariatur consectetur aliquip veniam nostrud culpa aliqua exercitation consequat non.</p>"
    },
    {
      title: "No description title",
      content:
        "<p>Commodo velit laboris enim adipisicing proident. Qui aliqua ea Lorem sint ex deserunt deserunt ipsum. Irure officia exercitation pariatur quis incididunt nostrud occaecat consequat cillum. Officia sunt duis consectetur voluptate voluptate deserunt ad consequat commodo.</p>"
    }
  ]
};

// Accordion Class definition.
const Accordion = class {
  // Methode create to create the HTML tags dynamically.
  create(options) {
    // Get my-accordion (main element) from DOM.
    let myAccordion = document.querySelector("#my-accordion");

    // Create main title element, set attribute and value, append to DOM.
    let mainTitle = document.createElement("div");
    mainTitle.setAttribute("class", "main-title");
    mainTitle.innerHTML = options.mainTitle;
    myAccordion.appendChild(mainTitle);

    // Create DOM element for each property of panels' array.
    options.panels.forEach((panel, index) => {
      // Create container for each panel, set attribute, append to DOM.
      let panelContainer = document.createElement("div");
      panelContainer.setAttribute("class", "panel");
      myAccordion.appendChild(panelContainer);

      // Create checkbox input to make the animation by it, set attributes.
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", `checkbox-${index + 1}`);
      panelContainer.appendChild(checkbox);

      // Create label for connecting to checkbox to use as a trigger, set attributes.
      let label = document.createElement("label");
      label.setAttribute("for", `checkbox-${index + 1}`);
      label.setAttribute("class", "panel-label");
      panelContainer.appendChild(label);

      // Create a container for title and subtitle (description), append to DOM.
      let titlesContainer = document.createElement("div");
      label.appendChild(titlesContainer);

      // Create related DOM element for each property of panel.
      for (const property in panel) {
        // Create content element and add it to panel container because it should be
        // sibling with checkbox input and label.
        if (property === "content") {
          let divElement = document.createElement("div");
          divElement.setAttribute("class", `panel-${property}`);
          divElement.innerHTML = panel[property];
          panelContainer.appendChild(divElement);
        } else {
          // Create other properties inside panel, put them inside a container,
          // add them to label.
          let divElement = document.createElement("div");
          divElement.setAttribute("class", `panel-${property}`);
          divElement.innerHTML = panel[property];
          titlesContainer.appendChild(divElement);
        }
      }
    });
  }
};

// Create an instance of class and call its method with parameter.
var accordion = new Accordion();
accordion.create(options);
