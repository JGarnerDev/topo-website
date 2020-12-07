import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import logo from "./logo";
import banner from "./banner";
import sideDish from "./sideDish";
import mainDish from "./sandwich";
import drink from "./drink";
import combo from "./combo";
import team from "./team";
import copywriting from "./copywriting";
import contactInfo from "./contactInfo";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    logo,
    banner,
    copywriting,
    sideDish,
    mainDish,
    drink,
    combo,
    team,
    contactInfo,
  ]),
});
