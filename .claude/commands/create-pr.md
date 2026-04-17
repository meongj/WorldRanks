## <!-- .claude/commands/create-pr.md -->

description: PR 생성
allowed-tools: Bash, Read

---

현재 브랜치의 변경사항으로 PR을 만들어줘.

1. `git diff main...HEAD`로 변경사항 확인
2. `git log main..HEAD --oneline`으로 커밋 목록 확인
3. 위 내용을 기반으로 PR 제목(conventional commit)과 본문 작성
4. `gh pr create --title "..." --body "..."` 실행

본문 형식:

## 변경 사항

- 주요 변경 내용 요약

## 상세

- 구체적인 변경 사항
