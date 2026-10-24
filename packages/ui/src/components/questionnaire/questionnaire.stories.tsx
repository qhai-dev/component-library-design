import {
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireInput,
  QuestionnaireSubmit,
} from "./index"

const meta = {
  title: "Components/Questionnaire",
}

export default meta

export const Default = {
  render: () => (
    <Questionnaire>
      <QuestionnaireItem name="q">
        <QuestionnaireInput placeholder="Answer" />
        <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}
