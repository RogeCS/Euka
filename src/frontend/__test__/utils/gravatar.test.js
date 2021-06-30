import gravatar from "../../utils/gravatar";

test("Gravatar function test", () => {
  const email = "rogelio.medina.cs@gmail.com";
  const gravatarUrl =
    "https://gravatar.com/avatar/fc5d3460d1615d563a54b3cad4b35025";
  expect(gravatarUrl).toEqual(gravatar(email));
});
