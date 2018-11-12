import gql from 'graphql-tag';

export const QGL_GET_ALL_DATA = gql`
  {
    allQuestion {
      edges {
        node {
          questionId
          isChoice
          questionText
          required
          position
          category {
            categoryId
            description
          }
          offeredAnswers {
            edges {
              node {
                offeredAnswerId
                answerText
                position
              }
            }
          }
        }
      }
    }
    allSchoolSubjects {
      edges {
        node {
          schoolSubjectId
          name
        }
      }
    }
    allTeacher {
      edges {
        node {
          teacherId
          name
        }
      }
    }
    allCourse {
      edges {
        node {
          courseId
          name
        }
      }
    }
    allCategory {
      edges {
        node {
          categoryId
          description
          position
        }
      }
    }
  }
`;

export const MUTATE_REPLIES = gql`
  mutation replyAnswerText(
    $teacherId: Int!
    $schoolSubjectId: Int!
    $courseId: Int!
    $questionsId: [Int]!
    $replies: [String]!
  ) {
    replyAnswerText(
      teacherId: $teacherId
      schoolSubjectId: $schoolSubjectId
      courseId: $courseId
      questionsId: $questionsId
      replies: $replies
    ) {
      ok
    }
  }
`;