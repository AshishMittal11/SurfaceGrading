import { waitForAsync } from "@angular/core/testing";
import { CreateRecordComponent } from "./create-record.component";

describe("CreateRecordComponent", async() => {
  let createRecordComponent: CreateRecordComponent;

  beforeEach(waitForAsync(() => {
    createRecordComponent = new CreateRecordComponent(null);
  }));

  it("should define a CreateRecordComponent", waitForAsync(() => {
      expect(createRecordComponent).toBeDefined();
  }));
  

  it("should define a CreateRecordComponent", waitForAsync(() => {
    expect(createRecordComponent).toBeDefined();
}));

  // TODO: Extend this spec with any tests you feel will increase coverage for the component
});
