import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { Questionnaire, QuestionnaireItem, QuestionnaireInput, QuestionnaireSubmit } from "./index";

describe("Questionnaire", () => {
  it("renders", () => {
    render(
      <Questionnaire>
        <QuestionnaireItem name="q">
          <QuestionnaireInput placeholder="Answer" />
          <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
        </QuestionnaireItem>
      </Questionnaire>,
    );
  });
});
