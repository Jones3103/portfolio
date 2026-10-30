"""
GitHub Push Utility for Jones Malaravan A Portfolio
Uses pure Python Git (Dulwich) to push your committed portfolio to GitHub.
"""

import sys
import os
import dulwich.porcelain as porcelain

REPO_PATH = os.path.dirname(os.path.abspath(__file__))
REPO_NAME = "Jones3103/portfolio"

def main():
    if len(sys.argv) > 1:
        token = sys.argv[1].strip()
    else:
        print("\n--- Push to GitHub (Jones3103/portfolio) ---")
        print("GitHub requires a Personal Access Token to push from terminal.")
        print("You can generate one with 'repo' scope at: https://github.com/settings/tokens/new\n")
        try:
            token = input("Enter your GitHub Token (ghp_...): ").strip()
        except EOFError:
            token = ""

    if not token:
        print("\n[ERROR] No token provided. Please run:")
        print(f"python push_to_github.py YOUR_GITHUB_TOKEN")
        sys.exit(1)

    remote_url = f"https://{token}@github.com/Jones3103/portfolio.git"
    print(f"\nPushing repository to https://github.com/{REPO_NAME} ...")

    try:
        # Push master to main branch on GitHub
        porcelain.push(REPO_PATH, remote_url, refspecs=['refs/heads/master:refs/heads/main'])
        print("\n[SUCCESS] Successfully pushed all files to https://github.com/Jones3103/portfolio.git!")
        print("Your repository is now updated with the latest commit.")
    except Exception as e:
        print("\n[PUSH FAILED]:", e)
        print("Please verify:")
        print("1. Your token has the 'repo' permission enabled.")
        print("2. The repository https://github.com/Jones3103/portfolio exists under your account.")

if __name__ == "__main__":
    main()
